import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { formToJSON } from "axios";


const baseUrl = 'http://127.0.0.1:8000/api'



//login action
export const login = createAsyncThunk(
    'auth/login',
    async (inputValue, { rejectWithValue }) => {
      const config = {
        method: 'post',
        url: `${baseUrl}/login`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: inputValue
      };
  
      try {
        const res = await axios(config);
        console.log(res.data);
        return res.data;
      } catch (error) {
        if (error.response && error.response.data.message) {
           return rejectWithValue(error.response.data.message)
        } else {
           return rejectWithValue(error.message)
        }
    }
    }
  );
  





//register action
export const register = createAsyncThunk(
    'auth/register',
    async (inputValue, { rejectWithValue }) => {
      const config = {
        method: 'post',
        url: `${baseUrl}/register`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: inputValue
      };
  
      try {
        const res = await axios(config);
          console.log(res.data);
        return  res.data;
      } catch (error) {
        if (error.response && error.response.data.message) {
           return rejectWithValue(error.response.data.message)
        } else {
           return rejectWithValue(error.message)
        }
    }
    }
  );
  