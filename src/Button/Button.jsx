import classNames from 'classnames';

const Button = ({ children, className, size, variant, ...rest }) => {
  let sizeClass = size && `button-${size}`;
  let variantClass = variant && `button-${variant}`;
  const allClasses = classNames(sizeClass, variantClass, className);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
