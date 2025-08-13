import classes from './index.module.css';
import WhiteCheckIcon from './assets/white-check.png';
import GrayCheckIcon from './assets/g400-check.png';
import Text from '../Text';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  fixed?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  fixed,
  ...props
}: CheckboxProps) {
  if (disabled) {
    return (
      <label className={classes.container}>
        <input
          type="checkbox"
          className={classes.hiddenInput}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <div className={classes.iconDisabled} />
        {label && (
          <Text t="sub2" as="span" className={classes.labelText ?? ''}>
            {label}
          </Text>
        )}
      </label>
    );
  }

  if (fixed) {
    return (
      <label className={classes.container}>
        <input
          type="checkbox"
          className={classes.hiddenInput}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <div className={classes.iconFixed}>
          <img
            alt="fixed checkbox"
            width={9.6}
            height={7.7}
            src={GrayCheckIcon}
            className={classes.checkIcon}
          />
        </div>
        {label && (
          <Text t="sub2" as="span" className={classes.labelText ?? ''}>
            {label}
          </Text>
        )}
      </label>
    );
  }

  return (
    <label className={classes.container}>
      <input
        type="checkbox"
        className={classes.hiddenInput}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div className={checked ? classes.iconChecked : classes.iconUnchecked}>
        {checked && (
          <img
            width={9.6}
            height={7.7}
            src={WhiteCheckIcon}
            alt="체크됨"
            className={classes.checkIcon}
          />
        )}
      </div>
      {label && (
        <Text t="sub2" as="span" className={classes.labelText ?? ''}>
          {label}
        </Text>
      )}
    </label>
  );
}
