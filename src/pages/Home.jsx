import Header from "../components/organisms/Header";
import FindSomethingForYou from "../components/organisms/FindSomethingForYou";

export default  function HomePage() {
    return (
        <div className="flex flex-col space-y-24">
            <Header/>
            <FindSomethingForYou/>
        </div>
        
    );
}