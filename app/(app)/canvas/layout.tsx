import GlobalNav from '../_components/GlobalNav';
import CourseNav from '../_components/CourseNav';
import RightSidebar from '../_components/RightSidebar';
import AppHeader from '../_components/AppHeader';
import { NavigationProvider } from '../_components/NavigationContext';
import LayoutContent from '../_components/LayoutContent';

export default function CanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <div className="h-screen">
        <GlobalNav />
        <CourseNav />
        <RightSidebar />
        
        <AppHeader />
        <LayoutContent>
          {children}
        </LayoutContent>
      </div>
    </NavigationProvider>
  );
}