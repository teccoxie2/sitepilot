import EstimatorWorkspace from "@/components/estimator_workspace";

export const dynamic = "force-dynamic";
export const maxDuration = 180;

export default async function EstimatorProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EstimatorWorkspace projectId={id} />;
}
