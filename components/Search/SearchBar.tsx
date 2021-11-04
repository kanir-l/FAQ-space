import { ChangeEvent, FC, FormEvent } from 'react'

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Search: FC<Props> = ({ value, onChange, onSubmit }) => {
  return (
    <div className="bg-primary">
      <div className="container max-width-lg">
        <form onSubmit={onSubmit} className="width-100% height-xxxxl flex items-center">
          <input
            className='form-control width-100%'
            type="search"
            name="input-term"
            id="input-term"
            placeholder="Search..."
            required
            value={value}
            onChange={onChange}
            data-testid="seach-input"
          />
        </form>
      </div>
    </div>
  );
};

export default Search