import ContentSection2 from "@/components/contentsection2";
import ContentSection3 from "@/components/contentsection3";
import ContentSection4 from "@/components/contentsection4";
import Main from "@/components/main"

export default function Home() {

  return (
    <div className="flex flex-col lg:mx-28">
      <div>
        <Main />
        <ContentSection2 />
        <ContentSection3 />
        <ContentSection4 />
      </div>
    </div>
  );
}
