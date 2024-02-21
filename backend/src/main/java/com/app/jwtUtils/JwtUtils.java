package com.app.jwtUtils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import io.jsonwebtoken.Jwts;

public class JwtUtils {

	@Value("${SECRET_KEY}")
	private String jwtSecret;

	@Value("${EXP_TIMEOUT}")
	private int jwtExpirationMs;
	
	private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
	
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}

	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().// Returns a new JwtParser instance used to parse JWT strings.
					setSigningKey(jwtSecret).// Sets the signing key used to verify JWT digital signature.
					parseClaimsJws(authToken);// Parses the signed JWT returns the resulting Jws<Claims> instance
												// throws exc in case of failures in verification
			return true;
		} catch (Exception e) {
			logger.error("Invalid JWT : " + e.getMessage());
		}
		/*
		 * // catch (SignatureException e) { //
		 * logger.error("Invalid JWT signature: {}", e.getMessage()); // } catch
		 * (MalformedJwtException e) { logger.error("Invalid JWT token: {}",
		 * e.getMessage()); } catch (ExpiredJwtException e) {
		 * logger.error("JWT token is expired: {}", e.getMessage()); } catch
		 * (UnsupportedJwtException e) { logger.error("JWT token is unsupported: {}",
		 * e.getMessage()); } catch (IllegalArgumentException e) {
		 * logger.error("JWT claims string is empty: {}", e.getMessage()); }
		 */

		return false;
	}
}
