import React, {ReactNode, useState} from 'react';
import {ScrollView} from 'react-native';
import {renderMask} from './src/utils/masks';

import {Input} from './src/Components';

const App: () => ReactNode = () => {
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [ip, setIp] = useState<string>('');
  const [mac, setMac] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');

  return (
    <ScrollView>
      <Input
        label="SEARCH"
        value={search}
        searchable={true}
        onChangeText={(text: string) => setSearch(text)}
      />
      <Input
        label="Error"
        value={error}
        errorMessage={errorMessage}
        onChangeText={(text: string) => {
          if (text.length > 3) setErrorMessage('Erro ao validar input');
          if (text.length <= 3) setErrorMessage('');
          setError(text);
        }}
      />
      <Input
        label="CPF"
        value={renderMask('cpf', cpf)}
        onChangeText={(text: string) => setCpf(text)}
        maxLength={14}
        keyboardType="numeric"
      />
      <Input
        label="CNPJ"
        value={renderMask('cnpj', cnpj)}
        onChangeText={(text: string) => setCnpj(text)}
        keyboardType="numeric"
      />
      <Input
        label="CEP"
        value={cep}
        onChangeText={(text: string) => setCep(text)}
        keyboardType="numeric"
      />
      <Input
        label="IP"
        value={renderMask('ip', ip)}
        onChangeText={(text: string) => setIp(text)}
        keyboardType="numeric"
      />
      <Input
        label="MAC"
        value={renderMask('mac', mac)}
        onChangeText={(text: string) => setMac(text)}
        maxLength={17}
      />
      <Input
        label="Telephone"
        value={renderMask('telephone', telephone)}
        onChangeText={(text: string) => setTelephone(text)}
        keyboardType="numeric"
      />
    </ScrollView>
  );
};

export default App;
