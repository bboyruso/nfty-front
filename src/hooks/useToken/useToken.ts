import { useCallback } from "react";
import { UserTokenPayloadStructure } from "../../types";
import jwt_decode from "jwt-decode";

const useToken = () => {
  const getTokenData = useCallback(
    (token: string): UserTokenPayloadStructure => {
      const decodedTokenData: { sub: string; name: string } = jwt_decode(token);

      const userSessionData = {
        id: decodedTokenData.sub,
        name: decodedTokenData.name,
      };

      return userSessionData;
    },
    []
  );
  return {
    getTokenData,
  };
};

export default useToken;
