import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';
import cx from '@lib/utilities/cx';

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ placeholder, onChange, className, value, ...props }) => {
  return (
    <div className={cx('input-container', className)}>
      <input
        placeholder={placeholder ? placeholder : 'Search here'}
        className="default-input"
        onChange={onChange}
        value={value}
        {...props}
      />
      <FiSearch className="icon-search" />
    </div>
  );
};

export default Input;
