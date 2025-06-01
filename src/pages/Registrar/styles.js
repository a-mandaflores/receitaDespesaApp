import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #00B94A;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
`;

export const TypeButton = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Text = styled.Text`
  font-size: 15px;
`;

