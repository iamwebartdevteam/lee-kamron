import axios from "axios";
import * as c from "../api/constant";

// ? REGISTRATION API
export const newsall = async (data) => {
  try {
    const url = c.NEWS;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? REGISTRATION API
export const newsDetails = async (data) => {
  try {
    const url = c.NEWS + "/" + data;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const entertainmentAll = async (data) => {
  try {
    const url = c.ENTERTAINMENT;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const entertainmentdetails = async (data) => {
  try {
    const url = c.ENTERTAINMENT + "/" + data;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const archiveAll = async (data) => {
  try {
    const url = c.ARCHIVE;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const archivedetails = async (data) => {
  try {
    const url = c.ARCHIVE + "/" + data;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const awardsAll = async (data) => {
  try {
    const url = c.AWARDS;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const pressAll = async (data) => {
  try {
    const url = c.URL + "/press";
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const contactInfo = async (data) => {
  try {
    const url = c.URL + "/outreach";
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const enqueryData = async (data) => {
  try {
    const url = c.URL + "/email-send";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
