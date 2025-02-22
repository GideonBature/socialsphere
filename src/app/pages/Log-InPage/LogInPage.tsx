import Image from 'next/image';

export default function LogInPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#EEEEEE] font-inter p-4">
            <div className="flex flex-col gap-6 w-full sm:w-[568px] sm:h-[374px] bg-white p-6 sm:p-10 rounded-[30px] shadow-xl text-center">
                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                    <h2 className="text-3xl sm:text-[40px] font-semibold text-[#323643] leading-tight [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                        Sign In
                    </h2>
                    <p className="font-medium text-sm sm:text-base text-[#323643] px-4 sm:px-10 leading-relaxed">
                        Please enter a username for your account and connect your wallet
                    </p>
                    <input
                        type="text"
                        placeholder="Enter new username"
                        className="w-full max-w-[403px] h-[50px] border border-[#7D7D7D] rounded-[20px] text-center text-lg sm:text-[20px] leading-[24.2px] px-4"
                    />
                    <button className="w-full max-w-[403px] h-[50px] flex items-center justify-center gap-5 sm:gap-3 bg-[#4151FF] text-white font-semibold rounded-[20px] shadow-md hover:bg-[#3240CC] transition">
                        <Image
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13YWxsZXQiPjxwYXRoIGQ9Ik0xOSA3VjRhMSAxIDAgMCAwLTEtMUg1YTIgMiAwIDAgMCAwIDRoMTVhMSAxIDAgMCAxIDEgMXY0aC0zYTIgMiAwIDAgMCAwIDRoM2ExIDEgMCAwIDAgMS0xdi0yYTEgMSAwIDAgMC0xLTEiLz48cGF0aCBkPSJNMyA1djE0YTIgMiAwIDAgMCAyIDJoMTVhMSAxIDAgMCAwIDEtMXYtNCIvPjwvc3ZnPg=="
                            alt="Wallet Icon"
                            width={36}
                            height={27}
                        />
                        <p className="font-medium text-[18px] sm:text-[20px] leading-[24.2px]">Connect Wallet</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
