import { InputHTMLAttributes } from 'react';
import Text from '../Text';
import classes from './index.module.css';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly name: string;
  readonly value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
  label?: string;
  disabled?: boolean;
  fixed?: boolean;
}

export default function Radio({
  name,
  value,
  isSelected,
  label,
  onChange,
  fixed,
  disabled,
  ...props
}: RadioProps) {
  return (
    <label className={classes.container}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={onChange}
        className={classes.hiddenInput}
        disabled={disabled}
        {...props}
      />
      <RadioIcon isSelected={isSelected} disabled={disabled} fixed={fixed} />
      {label && (
        <Text t="sub3" color="gray800">
          {label}
        </Text>
      )}
    </label>
  );
}

interface RadioIconProps {
  isSelected: boolean;
  disabled?: boolean | undefined;
  fixed?: boolean | undefined;
}

function RadioIcon({ isSelected, disabled, fixed }: RadioIconProps) {
  if (disabled) {
    return <div className={classes.iconDisabled} />;
  }
  if (fixed) {
    return <div className={classes.iconFixed} />;
  }
  return (
    <div
      className={isSelected ? classes.iconSelected : classes.iconUnselected}
    />
  );
}
