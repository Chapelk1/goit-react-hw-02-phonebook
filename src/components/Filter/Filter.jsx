import { Label, Input } from 'components/Filter/Filter.styled';


export const Filter = ({value, onChange}) => {
    return (
      <Label>
        Find contacts by name
        <Input type="text" onChange={onChange} value={value} />
      </Label>
    );
}














