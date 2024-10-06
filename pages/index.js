import { MdTranslate } from "react-icons/md";

export default function Home() {
  const text = "영화, 시리즈 등을\n무제한으로";
 
  return (
    <div className="min-h-screen min-w-screen bg-black">
      <div className="header-wrapper pl-[148px] pr-[148px] pt-[14px] flex justify-between items-center">
        <img
          src="https://private-user-images.githubusercontent.com/46954114/371838723-a2161ffe-1c0a-42a6-985d-74290c40b915.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc5OTkzODQsIm5iZiI6MTcyNzk5OTA4NCwicGF0aCI6Ii80Njk1NDExNC8zNzE4Mzg3MjMtYTIxNjFmZmUtMWMwYS00MmE2LTk4NWQtNzQyOTBjNDBiOTE1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDAzVDIzNDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmN2FkNzdiOTgxZmY2YTJkNDg4ZTliYzljM2MyZDBjZWU2OGNkMDBlNmJhYTczMzNjYmE4MzkwZDM2NTAzYzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ar98rFxLdZ4XYxIC5vLQFOHmhTmNj61Ahbzku_naHXs"
          className="w-[188px] h-[69px]"
        ></img>
        <div className="relative items-center">
          <MdTranslate className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-lg" />
          <select className="w-[130px] h-[33px] bg-transparent border border-gray-300 rounded-[5px] text-white mr-5 font-semibold pl-7 text-lg">
            <option value="kr">한국어</option>
            <option value="eng">English</option>
          </select>
          <button className="bg-[#E50914] h-[33.5px] w-[80px] rounded-[5px] text-white font-semibold">
            로그인
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[185px] text-center">
        <h1 className="text-white font-black text-[62px] whitespace-pre-line leading-[77px]">
          {text}
        </h1>
        <p className="text-white mt-4 font-semibold text-[22px] mb-8">
          5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능.
        </p>
        <h3 className="text-white text-lg font-medium">
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </h3>
      </div>

      <div className="flex pt-4 justify-center items-center gap-2">
        <input
          className="bg-transparent border border-gray-300 pl-4 w-[460px] h-[60px] rounded-[5px] text-lg font-semibold text-white"
          placeholder="이메일 주소"
        />
        <button className="bg-[#E50914] text-white h-[60px] w-[180px] rounded-[5px] text-2xl font-bold">
          시작하기 {">"}
        </button>
      </div>
    </div>
  );
}
