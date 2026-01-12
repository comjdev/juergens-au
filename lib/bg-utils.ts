import svgToDataUri from "mini-svg-data-uri";

/**
 * Validates and sanitizes a CSS color value to prevent injection attacks
 */
function validateColor(color: string): string {
	// Allow hex colors: #RGB, #RRGGBB, #RRGGBBAA
	const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
	if (hexRegex.test(color)) {
		return color;
	}

	// Allow rgb/rgba with numeric values only
	const rgbRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/;
	if (rgbRegex.test(color)) {
		return color;
	}

	// Allow hsl/hsla with numeric values only
	const hslRegex = /^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[\d.]+\s*)?\)$/;
	if (hslRegex.test(color)) {
		return color;
	}

	// Allowlist of safe CSS color names
	const safeColorNames = [
		'black', 'white', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta',
		'silver', 'gray', 'maroon', 'olive', 'lime', 'aqua', 'teal', 'navy',
		'fuchsia', 'purple', 'transparent', 'currentColor'
	];
	if (safeColorNames.includes(color.toLowerCase())) {
		return color;
	}

	// Fallback to safe default
	return "#000000";
}

/**
 * Generate background image for grid pattern
 */
export function bgGrid(color: string): string {
	const safeColor = validateColor(color);
	return `url("${svgToDataUri(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${safeColor}"><path d="M0 .5H31.5V32"/></svg>`
	)}")`;
}

/**
 * Generate background image for small grid pattern
 */
export function bgGridSmall(color: string): string {
	const safeColor = validateColor(color);
	return `url("${svgToDataUri(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${safeColor}"><path d="M0 .5H31.5V32"/></svg>`
	)}")`;
}

/**
 * Generate background image for dot pattern
 */
export function bgDot(color: string): string {
	const safeColor = validateColor(color);
	return `url("${svgToDataUri(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${safeColor}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
	)}")`;
}

