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
      
      <div className="pl-[312px] pr-[320px] h-full flex flex-col">
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-[#FAFAFA]">
          {children}
        </main>
      </div>
    </div>
  );
}