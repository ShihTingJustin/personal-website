import { CustomImageLoaderProps } from '@/Interfaces/I_Index';
import { ImageLoaderProps } from 'next/image';

import ImgixClient from '@imgix/js-core';
import ReactIcon from '@/Assets/icon/react.svg';
import ReduxIcon from '@/Assets/icon/redux.svg';
import NextIcon from '@/Assets/icon/next.svg';
import TsIcon from '@/Assets/icon/typescript.svg';
import SassIcon from '@/Assets/icon/sass.svg';
import TailwindIcon from '@/Assets/icon/tailwind.svg';
import GatsbyIcon from '@/Assets/icon/gatsby.svg';
import StorybookIcon from '@/Assets/icon/storybook.svg';
import GitlabIcon from '@/Assets/icon/gitlab.svg';
import AntdIcon from '@/Assets/icon/antd.svg';
import JestIcon from '@/Assets/icon/jest.svg';
import JsIcon from '@/Assets/icon/javascript.svg';
import VueIcon from '@/Assets/icon/vue.svg';
import NodeIcon from '@/Assets/icon/node.svg';
import ExpressIcon from '@/Assets/icon/express.svg';
import AwsIcon from '@/Assets/icon/aws.svg';
import AzureIcon from '@/Assets/icon/azure.svg';
import AnsibleIcon from '@/Assets/icon/ansible.svg';
import MochaIcon from '@/Assets/icon/mocha.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export const getIcon = (icon: string) => {
  switch (icon) {
    case 'typescript':
      return <TsIcon width="40" height="40" viewBox="0 0 512 512" alt="icon" />;
    case 'react':
      return <ReactIcon style={{ fill: '#1993c0' }} width="40" height="40" alt="icon" />;
    case 'redux':
      return <ReduxIcon width="40" height="40" alt="icon" />;
    case 'next':
      return <NextIcon style={{ fill: '#fff' }} alt="icon" />;
    case 'sass':
      return <SassIcon width="50" height="40" viewBox="0 0 512 512" alt="icon" />;
    case 'tailwind':
      return <TailwindIcon width="40" height="40" viewBox="0 0 1000 1000" alt="icon" />;
    case 'antd':
      return <AntdIcon width="40" height="40" alt="icon" />;
    case 'gatsby':
      return <GatsbyIcon width="40" height="40" alt="icon" />;
    case 'storybook':
      return <StorybookIcon width="40" height="40" alt="icon" />;
    case 'gitlab':
      return <GitlabIcon width="50" height="50" alt="icon" />;
    case 'jest':
      return <JestIcon width="40" height="40" alt="icon" />;
    case 'javascript':
      return <JsIcon width="40" height="40" alt="icon" />;
    case 'vue':
      return <VueIcon width="40" height="40" alt="icon" />;
    case 'node':
      return <NodeIcon width="40" height="40" alt="icon" />;
    case 'express':
      return <ExpressIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'aws':
      return <AwsIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'azure':
      return <AzureIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'ansible':
      return <AnsibleIcon style={{ background: '#fff' }} width="40" height="40" alt="icon" />;
    case 'mocha':
      return <MochaIcon width="40" height="40" alt="icon" />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'github':
      return <GitHubIcon />;
    case 'blog':
      return <RssFeedIcon />;
    case 'instagram':
      return <InstagramIcon />;
    default:
      return;
  }
};

// closure
export function getCustomImageLoader({
  imgixDomain,
  imgixSecureURLToken,
  imgixParams,
}: CustomImageLoaderProps) {
  return function ({ src, width, quality }: ImageLoaderProps) {
    const client = new ImgixClient({
      useHTTPS: true,
      includeLibraryParam: false,
      domain: imgixDomain || 'example.imgix.net',
      secureURLToken: imgixSecureURLToken,
    });
    const baseUrl = `/${src}`;
    const secureUrl = client.buildURL(baseUrl, {
      w: width,
      ...imgixParams,
    });
    return secureUrl;
  };
}
