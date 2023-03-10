import each from 'jest-each';
import { Edge } from '../../shapes/edge';
import { Point } from '../../shapes/point';

describe('Edge Tests', () => {
  each([
    [0, 0, 10, 10, 10, 10, 0, 0, true],
    [0, 0, 10, 10, 0, 0, 10, 10, true],
    [0, 0, 10, 10, 0, 0, 10, 0, false],
    [0, 0, 10, 10, 5, 1, 1, 20, false],
  ]).it(
    'should determine if edgeOne [(%s, %s), (%s, %s)] is equal to edgeTwo [(%s, %s), (%s, %s)] [%s]',
    (
      ax: number,
      ay: number,
      bx: number,
      by: number,
      cx: number,
      cy: number,
      dx: number,
      dy: number,
      equality: boolean,
    ) => {
      // given
      let edgeOne: Edge = new Edge(new Point(ax, ay), new Point(bx, by));
      let edgeTwo: Edge = new Edge(new Point(cx, cy), new Point(dx, dy));

      // when
      let result = edgeOne.isEqualTo(edgeTwo);

      // then
      expect(result).toEqual(equality);
    },
  );

  each([
    [
      [
        new Edge(new Point(0, 0), new Point(100, 0)),
        new Edge(new Point(45, 45), new Point(6, 63)),
        new Edge(new Point(746, 9), new Point(552, 2)),
      ],
      [
        new Edge(new Point(0, 0), new Point(100, 0)),
        new Edge(new Point(45, 45), new Point(6, 63)),
        new Edge(new Point(746, 9), new Point(552, 2)),
      ],
    ],
    [
      [
        new Edge(new Point(0, 0), new Point(100, 0)),
        new Edge(new Point(45, 45), new Point(6, 63)),
        new Edge(new Point(31, 6), new Point(552, 2)),
        new Edge(new Point(552, 2), new Point(31, 6)),
        new Edge(new Point(746, 9), new Point(552, 2)),
      ],
      [
        new Edge(new Point(0, 0), new Point(100, 0)),
        new Edge(new Point(45, 45), new Point(6, 63)),
        new Edge(new Point(746, 9), new Point(552, 2)),
      ],
    ],
  ]).it('should remove edges were the count is greater than 1', (edges: Edge[], processedEdges: Edge[]) => {
    // CASE-0: no edge removal necessary
    // CASE-N: edges with a count greater than one to be discarded

    // when
    let result = Edge.removeDuplicateEdges(edges);

    // then
    expect(result).toEqual(processedEdges);
  });
});
