import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccd6e6',
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  inputStyle: {
    fontSize: 16,
    color: '#5c5c5c',
    width: '100%',
    marginLeft: 8,
  },
  errorInputStyle: {
    borderColor: '#eb4034',
  },
  labelStyle: {
    marginLeft: 22,
    marginBottom: 4,
    fontSize: 16,
    color: '#989a9e',
  },
  searchIconStyle: {
    width: 18,
    height: 18,
    marginLeft: 16,
  },
  errorIconStyle: {
    width: 8,
    height: 8,
    marginLeft: 16,
  },
  errorMessageWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 16,
  },
  errorMessageStyle: {
    fontSize: 12,
    color: '#eb4034',
    marginLeft: 8,
  },
  disabledStyle: {
    backgroundColor: '#e6e7e8',
  },
});
