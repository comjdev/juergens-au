"use client";

import { useRef, useCallback, useEffect } from "react";

interface ObfuscatedEmailProps {
	/**
	 * Array of reversed email parts.
	 * Example: ["[email parts removed]"] for "[email removed]"
	 * Format: [reversedDomain, reversedUsername]
	 */
	parts: [string, string];
	/**
	 * Optional className for the anchor element
	 */
	className?: string;
	/**
	 * Optional children to render inside the anchor
	 */
	children?: React.ReactNode;
	/**
	 * Optional onClick handler (called after setting the email)
	 */
	onClick?: () => void;
	/**
	 * When to set the email address.
	 * - "click": Set only when clicked (most secure, email never in DOM until click)
	 * - "hover": Set on hover (good balance of security and UX)
	 * - "mount": Set when component mounts (less secure, but better for accessibility)
	 * @default "click"
	 */
	setOn?: "click" | "hover" | "mount";
}

/**
 * ObfuscatedEmail component that decodes email addresses client-side
 * to avoid spam bots scraping email addresses from HTML source.
 * By default, the email is only set when the user clicks the link,
 * ensuring it's never in the DOM until user interaction.
 *
 * @example
 * <ObfuscatedEmail parts={["[email parts removed]"]}>
 *   Contact me
 * </ObfuscatedEmail>
 */
export const ObfuscatedEmail = ({
	parts,
	className,
	children,
	onClick,
	setOn = "click",
}: ObfuscatedEmailProps) => {
	const anchorRef = useRef<HTMLAnchorElement>(null);
	const emailSetRef = useRef<boolean>(false);

	// Decode the email (only called when needed)
	const getEmail = useCallback(() => {
		return (
			parts[1].split("").reverse().join("") +
			"@" +
			parts[0].split("").reverse().join("")
		);
	}, [parts]);

	// Set the email address in the DOM
	const setEmail = useCallback(() => {
		if (anchorRef.current && !emailSetRef.current) {
			const email = getEmail();
			anchorRef.current.href = "mailto:" + email;

			// If no children provided, set the email as text content
			if (!children && anchorRef.current.textContent === "") {
				anchorRef.current.textContent = email;
			}

			emailSetRef.current = true;
		}
	}, [getEmail, children]);

	// Handle click - set email if not already set, then allow default behavior
	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>) => {
			if (!emailSetRef.current) {
				setEmail();
			}
			onClick?.();
			// Allow default link behavior
		},
		[setEmail, onClick],
	);

	// Handle hover - set email on first hover if setOn is "hover"
	const handleMouseEnter = useCallback(() => {
		if (setOn === "hover" && !emailSetRef.current) {
			setEmail();
		}
	}, [setOn, setEmail]);

	// Set on mount if setOn is "mount"
	useEffect(() => {
		if (setOn === "mount") {
			setEmail();
		}
	}, [setOn, setEmail]);

	return (
		<a
			ref={anchorRef}
			href="#"
			className={className}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
		>
			{children}
		</a>
	);
};

/**
 * Hook to get the decoded email address
 * Useful when you need the email value for other purposes (e.g., copying to clipboard)
 */
export const useObfuscatedEmail = (parts: [string, string]): string => {
	return (
		parts[1].split("").reverse().join("") +
		"@" +
		parts[0].split("").reverse().join("")
	);
};
