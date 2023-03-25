export default function sleep(ms: number) {
  return new Promise((resolve: any) => setTimeout(resolve, ms));
}
