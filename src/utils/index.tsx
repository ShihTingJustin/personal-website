import ReactIcon from '../../public/icon/react.svg';
import ReduxIcon from '../../public/icon/redux.svg';
import NextIcon from '../../public/icon/next.svg';
import TsIcon from '../../public/icon/typescript.svg';
import SassIcon from '../../public/icon/sass.svg';
import TailwindIcon from '../../public/icon/tailwind.svg';
import GatsbyIcon from '../../public/icon/gatsby.svg';
import StorybookIcon from '../../public/icon/storybook.svg';
import GitlabIcon from '../../public/icon/gitlab.svg';
import AntdIcon from '../../public/icon/antd.svg';
import JestIcon from '../../public/icon/jest.svg';
import JsIcon from '../../public/icon/javascript.svg';
import VueIcon from '../../public/icon/vue.svg';
import NodeIcon from '../../public/icon/node.svg';
import ExpressIcon from '../../public/icon/express.svg';
import AwsIcon from '../../public/icon/aws.svg';
import AzureIcon from '../../public/icon/azure.svg';
import AnsibleIcon from '../../public/icon/ansible.svg';
import MochaIcon from '../../public/icon/mocha.svg';

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
    default:
      return;
  }
};
