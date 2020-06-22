import styled from 'styled-components';
import { up } from '../breakpoint/breakpoint';

/**
 *
 * Title
 *
 */
export const PageTitle = styled.h1`
  color: #668cff;
  font-size: 48px;
  line-height: 110%;

  margin-top: 96px;
  margin-bottom: 40px;

  ${up('md')} {
    font-size: 72px;
    margin-top: 192px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  line-height: 110%;
  font-weight: bold;

  ${up('md')} {
    font-size: 72px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 32px;
  line-height: 110%;

  ${up('md')} {
    font-size: 48px;
  }
`;

export const TextTitle = styled.h4`
  font-size: 20px;
  line-height: 110%;

  margin-top: 40px;
  margin-bottom: 16px;
`;

/**
 *
 * Text
 *
 */
export const Text = styled.p`
  font-size: 16px;
  line-height: 150%;

  margin-top: 0;
  margin-bottom: 16px;
`;

export const LargeText = styled.p`
  font-size: 24px;
  line-height: 110%;
  font-weight: bold;

  margin-top: 0;
  margin-bottom: 40px;

  ${up('md')} {
    font-size: 32px;
  }
`;

export const CaptionText = styled.p`
  font-size: 12px;
  line-height: 110%;
  font-weight: bold;

  color: rgba(32, 40, 64, 0.5);
`;

/**
 *
 * Image Card Titles & Subtitles
 *
 */
export const ImageCardTitleLarge = styled.p`
  font-size: 20px;
  line-height: 110%;
  font-weight: bold;
  margin-top: 16px;
  padding-bottom: 16px;
`;

export const ImageCardTitleSmall = styled.p`
  font-size: 14px;
  line-height: 150%;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 0;

  ${up('md')} {
    margin-top: 16px;
  }
`;

export const ImageCardSubtitleSmall = styled.p`
  font-size: 14px;
  line-height: 150%;
  margin: 0;
`;
