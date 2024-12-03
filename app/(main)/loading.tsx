export default function Loading() {
  return (
    <div className="bg-red fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 flex  h-full w-full items-center justify-center bg-white/50 mix-blend-normal backdrop-blur-lg">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
}
