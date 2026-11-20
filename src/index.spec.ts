/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-11-20
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import { sample } from './index';

describe('@robert.tools/atom-image', () => {
    it('should return a atom-image string', () => {
        expect(sample('hello')).toBe('sample: hello');
    });

    it('should return a atom-image string with empty input', () => {
        expect(sample('')).toBe('sample: ');
    });
});
