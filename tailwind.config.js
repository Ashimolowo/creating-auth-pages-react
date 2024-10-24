import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#442D7C;"
      },
      screens: {
        
      }
    },
  },
  plugins: [],
});