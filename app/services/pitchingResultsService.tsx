import axiosInstance from "@app/utils/axiosInstance";

export const getPitchingResults = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/pitching_results");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createPitchingResult = async (data: PitchingResultData) => {
  try {
    const response = await axiosInstance.post("/api/v1/pitching_results", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePitchingResult = async (
  id: number,
  data: PitchingResultData
) => {
  try {
    const response = await axiosInstance.put(
      `/api/v1/pitching_results/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const checkExistingPitchingResult = async (
  gameResultId: number | null,
  userId: number | null
) => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/pitching_search?game_result_id=${gameResultId}&user_id=${userId}`
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};