import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinkItems,
  FooterHeader,
  FooterLink,
  Icons,
  FooterCopyRight,
} from './Footer.style';

import {
  IoLogoGithub,
  IoLogoStackoverflow,
  IoLogoLinkedin,
} from 'react-icons/io5';

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinkItems>
            <FooterHeader></FooterHeader>
            <FooterLink>
              <a
                href='https://github.com/cnl-95'
                target='_blank'
                rel='noreferrer'
              >
                <Icons>
                  <IoLogoGithub />
                </Icons>
              </a>
            </FooterLink>
            <FooterLink>
              <a
                href='https://www.linkedin.com/in/christian-lafferty-9212a9230'
                target='_blank'
                rel='noreferrer'
              >
                <Icons>
                  <IoLogoLinkedin />
                </Icons>
              </a>
            </FooterLink>
            <FooterLink>
              <a
                href='https://stackoverflow.com/users/19621354/christian'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <Icons>
                  <IoLogoStackoverflow />
                </Icons>
              </a>
              <FooterCopyRight>
                &copy;{new Date().getFullYear()} by Christian Lafferty
              </FooterCopyRight>
            </FooterLink>
          </FooterLinkItems>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
