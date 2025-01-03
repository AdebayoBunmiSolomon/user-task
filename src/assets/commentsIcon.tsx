import React from "react";

type commentsIconProps = {
  color: string;
};

export const CommentsIcon: React.FC<commentsIconProps> = ({ color }) => {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_11_728)'>
        <path
          d='M8.21803 0.397057C8.13072 0.406248 7.79984 0.438417 7.48274 0.465991C6.41656 0.557903 5.18954 0.829042 4.37612 1.15073C2.6298 1.84007 1.42576 3.06709 0.741012 4.84559C0.189542 6.2886 -0.0402377 8.10845 0.00571815 10.659C0.0378873 12.4697 0.152777 13.4669 0.456086 14.6112C1.1684 17.2904 2.75848 18.8575 5.47906 19.5561C6.66013 19.8594 7.99745 19.9926 9.79892 19.9926C12.9607 19.9926 14.946 19.5607 16.5361 18.5358C17.0232 18.2187 17.8136 17.4375 18.1445 16.9412C18.8384 15.9026 19.275 14.5515 19.5094 12.7132C19.6289 11.8125 19.6243 8.56801 19.5094 7.63051C19.4175 6.90441 19.3623 6.75276 19.1142 6.58732C18.8017 6.37592 18.4065 6.41268 18.1491 6.67463C17.9515 6.87684 17.8963 7.10202 17.9561 7.48345C18.1261 8.60018 18.1445 11.4632 17.9883 12.6397C17.7263 14.6158 17.2438 15.8015 16.3338 16.7114C15.3963 17.6489 14.0728 18.1636 12.0094 18.3934C11.2695 18.4761 8.28237 18.4761 7.62061 18.3934C4.72998 18.0395 3.26859 17.2215 2.39542 15.466C1.78421 14.2482 1.50848 12.5937 1.50848 10.1811C1.50848 5.44301 2.60682 3.2739 5.44689 2.39614C6.56362 2.05147 7.50572 1.93198 9.35774 1.89982C10.7364 1.87684 11.8302 1.9182 12.4873 2.02849C12.8274 2.08364 13.0664 2.01471 13.2778 1.79871C13.627 1.44945 13.5259 0.847425 13.0802 0.617645C12.8136 0.479778 11.8761 0.410844 10.1022 0.392462C9.15554 0.38327 8.30535 0.387866 8.21803 0.397057Z'
          fill={color}
        />
        <path
          d='M17.4846 4.25C18.4511 4.25 19.2346 3.4665 19.2346 2.5C19.2346 1.5335 18.4511 0.75 17.4846 0.75C16.5181 0.75 15.7346 1.5335 15.7346 2.5C15.7346 3.4665 16.5181 4.25 17.4846 4.25Z'
          stroke={color}
          strokeWidth='1.5'
        />
        <path
          d='M4.98456 12.5L7.92038 9.07488C7.95597 9.03336 8.01831 9.02813 8.06032 9.06314L10.9018 11.431C10.9465 11.4683 11.0134 11.4597 11.0472 11.4123L13.4846 8'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_11_728'>
          <rect width='20' height='20' fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
