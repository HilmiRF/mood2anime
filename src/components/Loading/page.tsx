import React, { FC } from 'react'

interface LoadingProps {
  mood: string;
}

const Loading: FC<LoadingProps> = ({ mood }) => {
  return (
    <div className="text-center text-lg">
                <div className="font-regular">We're fetching the best anime to watch when you're feeling
            <div className="font-semibold"> {mood} </div> Hold on tight!
        </div>
    </div>
	);
};

export default Loading;