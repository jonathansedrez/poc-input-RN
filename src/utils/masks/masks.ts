import {formatCpf, formatCnpj} from '@brazilian-utils/formatters';

export interface Masks {
  [key: string]: string;
}

const isLastChar = (index, str) => index === str.length - 1;
const onlyNumbers = str => String(str).replace(/[^\d]/g, '');

export const formatCep = (cep: string) => {
  if (!cep) return '';

  const numericCep = onlyNumbers(cep);
  const DOT_INDEXES = [1, 4];

  return numericCep
    .slice(0, 8)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, numericCep)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
      }
      return result;
    }, '');
};

export const formatIp = (ip: string) => {
  return ip;
};

export const formatMac = (mac: string) => {
  const macWithoutSpecials = String(mac).replace(/[^\w\s]/gi, '');
  const DOT_INDEXES = [1, 3, 5, 7, 9];
  if (!macWithoutSpecials) return '';
  return macWithoutSpecials
    .slice(0, 12)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, mac)) {
        if (DOT_INDEXES.includes(index)) return `${result}:`;
      }
      return result;
    }, '');
};

export const formatTelephone = (telephone: string) => {
  if (!telephone) return '';

  const telephoneNumbers = onlyNumbers(telephone);

  const PLUS_INDEXES = 0;
  const OPEN_PARENTHESES_INDEXES = 1;
  const CLOSE_PARENTHESES_INDEXES = 3;
  const HYPHEN_INDEXES = telephone.length === 18 ? 7 : 8;

  return telephoneNumbers
    .slice(0, 13)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, telephoneNumbers)) {
        if (PLUS_INDEXES === index) return `+${result}`;
        if (OPEN_PARENTHESES_INDEXES === index) return `${result} (`;
        if (CLOSE_PARENTHESES_INDEXES === index) return `${result}) `;
        if (HYPHEN_INDEXES === index) return `${result}-`;
      }
      return result;
    }, '');
};

export const renderMask = (
  mask: 'cpf' | 'cnpj' | 'ip' | 'cep' | 'telephone' | 'mac',
  text: string,
): string => {
  const masks: Masks = {
    cpf: formatCpf(text),
    cnpj: formatCnpj(text),
    ip: formatIp(text), //todo
    mac: formatMac(text), //todo: uppercase
    cep: formatCep(text),
    telephone: formatTelephone(text),
  };
  return masks[mask] ? masks[mask] : text;
};
