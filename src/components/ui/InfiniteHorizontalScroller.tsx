import { TokenIcon } from '@web3icons/react';
import { coins } from '../../helper/coinList';
import '../../App.css';
export default function InfiniteHorizontalScroller() {
  return (
    <div className="border-y bg-gray-500  bg-opacity-10 py-2 w-screen overflow-clip absolute left-0 top-16">
      <div className="flex animate-scroll">
        {coins.map((c, i) => (
          <div key={i} className="flex items-center  px-4 py-2">
            <TokenIcon symbol={c} variant="branded" size={64} />
          </div>
        ))}
        {coins.map((c, i) => (
          <div key={i} className="flex items-center  px-4 py-2">
            <TokenIcon symbol={c} variant="branded" size={64} />
          </div>
        ))}
      </div>
    </div>
  );
}
