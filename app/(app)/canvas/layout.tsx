import GlobalNav from '../_components/GlobalNav';
import CourseNav from '../_components/CourseNav';
import RightSidebar from '../_components/RightSidebar';
import AppHeader from '../_components/AppHeader';

export default function CanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <GlobalNav />
      <CourseNav />
      <RightSidebar />
      
      <AppHeader />
      <div className="pl-[312px] pr-[320px] pt-[50px] h-full">
        <main className="h-full overflow-y-auto bg-[#FAFAFA]">
          {children}
        </main>
      </div>
    </div>
  );
}