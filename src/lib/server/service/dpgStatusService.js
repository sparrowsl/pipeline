import { getAllDpgStatuses, createProjectDpgStatus } from '$lib/server/repo/dpgStatusRepo.js';

export async function saveDPGStstatus(projectId, openAIResponse, supabase) {
  const parsedResponse = openAIResponse;

  const dpgStatuses = await getAllDpgStatuses(supabase);

  const explanations = parsedResponse.explanation.split('\n\n');

  const projectDpgStatusData = dpgStatuses.map((criteria, index) => {
    const explanationMatch = explanations.find(
      (explanation) => explanation.includes(criteria.name), // Match explanation with the status name
    );

    const match = explanationMatch?.match(/\*\*(.*?)\*\*.*?Score:\s*(\d+)/);
    const score = match ? parseInt(match[2], 10) : 0;
    //const ex = explanations[index] || 'No explanation provided.';

    const cleanedExplanation = explanationMatch
      ? explanationMatch
          .replace(/^\d+\.\s*\*\*.*?\*\*:\s*/, '') // Removes the number, bold text, and colon
          .replace(/Score:\s*\d+/, '') // Removes "Score: X"
          .trim() // Trims leading/trailing whitespace
      : 'No explanation provided.';

    return {
      project_id: projectId,
      status_id: criteria.id,
      score: score,
      explanation: cleanedExplanation,
    };
  });

  //console.log(projectDpgStatusData);

  for (const data of projectDpgStatusData) {
    await createProjectDpgStatus(data, supabase);
  }

  return projectDpgStatusData;
}
