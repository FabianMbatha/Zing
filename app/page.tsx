import Navbar from "./components/navbar";
import Card from "./components/profile_card";
import BottomNav from "./components/bottom_bar";

export default function Page() {
  return (
    <main>
        <Navbar />
        <Card />
        <BottomNav />
    </main>
  )
}