import { useRoutes } from "react-router-dom";
import Header from "../Header";
import AddPoll from "../AddPoll";
import AllPoll from "../AllPoll";
import ActivePoll from "../ActivePoll";

export const Router = () => {
    return useRoutes([
        {
            path: "",
            element: <Header />,
            children: [
                {
                    path: "",
                    element: <AddPoll />,
                },
                {
                    path: "allpoll",
                    element: <AllPoll />,
                },
                {
                    path: "activepoll",
                    element: <ActivePoll />,
                },
            ],
        },
    ]);
};
