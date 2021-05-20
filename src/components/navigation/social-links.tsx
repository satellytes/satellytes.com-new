import { LinkedinWrapper } from '../icons/social/linkedin';
import { XingWrapper } from '../icons/social/xing';
import { GithubIconWrapper } from '../icons/social/github';
import React from 'react';
import styled from 'styled-components';
import { up } from '../breakpoint/breakpoint';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const SocialLinkList = styled.ul`
  all: unset;
  order: 2;

  ${up('md')} {
    order: 1;
    margin-bottom: 20px;
  }
`;
const SocialLinkItem = styled.li`
  display: inline-block;
  margin-right: 16px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

const SocialLink = styled.a`
  svg {
    vertical-align: middle;
  }
`;

export const SocialLinks = () => {
  const { t } = useTranslation();

  return (
    <SocialLinkList>
      <SocialLinkItem>
        <SocialLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/satellytes"
          title={t(
            'social.linkedin.title',
            'Go to the Satellytes LinkedIn profile',
          )}
        >
          <LinkedinWrapper />
        </SocialLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <SocialLink
          title="Go to the Satellytes Xing profile"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.xing.com/companies/satellytesgmbh"
        >
          <XingWrapper />
        </SocialLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <SocialLink
          title="Go to the Satellytes Github profile"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/satellytes"
        >
          <GithubIconWrapper />
        </SocialLink>
      </SocialLinkItem>
    </SocialLinkList>
  );
};
