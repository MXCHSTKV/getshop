import ContentSection2 from "@/components/contentsection2";
import ContentSection3 from "@/components/contentsection3";
import ContentSection4 from "@/components/contentsection4";
import ContentSection5 from "@/components/contentsection5";
import ContentSection6 from "@/components/contentsection6";
import Main from "@/components/main"

export default function Home() {

  return (
    <div className="flex flex-col">
        <Main />
        <ContentSection2 />
        <ContentSection3 />
        <ContentSection4 />
        <ContentSection5 />
        <ContentSection6 />
    </div>
  );
}
