import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Poll } from "../../types";

const Axios = axios.create({
    baseURL: "http://localhost:5000/poll"
})
/***************************************** */
export const addPoll = createAsyncThunk(
    "poll/addPoll",
    async (postData: Poll) => {
        await Axios.post("/", postData);
    }
);

export const getPoll = createAsyncThunk("poll/getPoll", async () => {
    const { data } = await Axios.get("/");
    return data.polls;
});

export const getActivePoll = createAsyncThunk(
    "poll/getActivePoll",
    async () => {
        const { data } = await Axios.get("/active");
        return data.polls;
    }
);

export const changePollActive = createAsyncThunk(
    "poll/changePollActive",
    async (id: number | string) => {
        await Axios.patch(`/active/${id}`, {
            active: true,
        });
    }
);

export const quotePoll = createAsyncThunk(
    "poll/quotePoll",
    async (id: number | string) => {
        await Axios.patch(`/option/quote/${id}`);
    }
);
