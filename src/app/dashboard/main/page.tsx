
import { SimpleWidget, WidgetsGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Tempor laboris nostrud elit elit sunt duis velit pariatur irure enim et voluptate.',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <WidgetsGrid />
    </div>
  );
}