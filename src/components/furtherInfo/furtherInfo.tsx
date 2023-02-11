import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery, Box } from '@mui/material';
import theme from '../../theme';
import Lottie from 'react-lottie';
import animationData from '@/Assets/lottie/external-link.json';

import { getIcon } from '@/Utils/index';

const socialData = [
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/justinhuang777',
  },
  {
    name: 'github',
    url: 'https://github.com/ShihTingJustin',
  },
  {
    name: 'mail',
    url: 'mailto:justinhuang777@gmail.com',
  },
  {
    name: 'blog',
    url: 'https://www.sthdev.app',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/mb722656355s/',
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const FurtherInfo = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          textAlign: 'center',
          '>p': {
            textShadow: theme.textGlow,
            background: theme.web3Gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '18px', sm: '24px' },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            '.icon-text': {
              bgcolor: '#fff',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'capitalize',
              lineHeight: '18px',
              fontSize: { xs: '12px', sm: '14px' },
            },

            a: {
              opacity: 0.3,
              svg: {
                fill: '#f6f7f9',
                m: {
                  xs: '10px 12px 0',
                  sm: '10px 24px 4px',
                },
                fontSize: '40px',
              },

              '&:hover,&:active': {
                opacity: 1,
                svg: {
                  fill: '#fff',
                  transform: 'scale(1.3)',
                },
                '.icon-text': {
                  fontSize: { xs: '16px', sm: '18px' },
                },
              },
            },
          }}
        >
          {socialData.map((data, index) => (
            <a
              key={index}
              href={data.url}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay={200 + Number(index) * 50}
              data-aos-offset="0"
              target="_blank"
              rel="noreferrer"
            >
              {getIcon(data.name)}
              <div className="icon-text">{data.name}</div>
            </a>
          ))}
        </Box>
      </Box>
      <footer>
        <div>
          <a
            href="https://github.com/ShihTingJustin/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            Designed and developed by JustinHuang in Taiwan
            {matches && <Lottie speed={1.5} width={45} height={45} options={defaultOptions} />}
          </a>
        </div>
      </footer>
    </ThemeProvider>
  );
};
