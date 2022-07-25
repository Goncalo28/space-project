const API_URL = "v1";

const httpGetPlanets = async () => {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
};

const httpGetLaunches = async () => {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
};

const httpSubmitLaunch = async (launch) => {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return { ok: false };
  }
};

const httpAbortLaunch = async (id) => {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    return { ok: false };
  }
};

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
