import React, { ButtonHTMLAttributes } from 'react';
import cx from '@lib/utilities/cx';
import { IconType } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

// supports static images and material ui icons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  ButtonIcon?:
    | string
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
      });
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  content,
  className,
  ButtonIcon,
  onClick,
  href,
  ...props
}) => {
  return (
    <Link className="default-link" href={href ? `${href}` : '/'} passHref>
      <button
        type="button"
        className={cx(`synap-default-button`, className)}
        {...props}
        onClick={onClick && onClick}
      >
        {typeof ButtonIcon === 'string' ? (
          <Image
            alt={ButtonIcon}
            src={ButtonIcon}
            width="17"
            height="17"
            style={{ paddingRight: '6px' }}
            priority
          />
        ) : (
          ButtonIcon && <ButtonIcon sx={{ fontSize: '17px' }} />
        )}
        {content && <p>{content}</p>}
      </button>
    </Link>
  );
};

export default Button;
