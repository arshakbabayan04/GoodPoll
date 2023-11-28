import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Poll } from "../../types";

export const addPoll = createAsyncThunk(
    "poll/addPoll",
    async (postData: Poll) => {
        await axios.post("http://localhost:5000/poll", postData);
    }
);

export const getPoll = createAsyncThunk("poll/getPoll", async () => {
    const { data } = await axios.get("http://localhost:5000/poll");
    return data.polls;
});

export const getActivePoll = createAsyncThunk(
    "poll/getActivePoll",
    async () => {
        const { data } = await axios.get("http://localhost:5000/poll/active");
        return data.polls;
    }
);

export const changePollActive = createAsyncThunk(
    "poll/changePollActive",
    async (id: number | string) => {
        await axios.patch(`http://localhost:5000/poll/active/${id}`, {
            active: true,
        });
    }
);

export const quotePoll = createAsyncThunk(
    "poll/quotePoll",
    async (id: number | string) => {
        await axios.patch(`http://localhost:5000/poll/option/quote/${id}`);
    }
);
