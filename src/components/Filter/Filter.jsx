import {Label, Input} from '../Filter/Filter.styled'

export const Filter = ({ value, onChange }) => {
    return (
        <Label > Find contacts by name
            <Input type="text" value={value} onChange={onChange} />
            </Label>
    )
}