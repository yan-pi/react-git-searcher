import styled from "styled-components";

function Loader() {
  const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust the height as needed */
  `;
  const Loader = styled.div`
    border: 16px solid #f3f3f3; /* Light gray border */
    border-top: 16px solid #3498db; /* Blue border on top */
    border-radius: 50%;
    width: 84px;
    height: 84px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
}

export default Loader;
