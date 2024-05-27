import { Route, Routes } from "react-router";
import { Header, Footer } from "./components";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
	return (
    <QueryClientProvider client={queryClient}>
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
      <Footer/>
    </QueryClientProvider>
	);
};

export default App;
