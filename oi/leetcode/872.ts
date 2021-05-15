// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let leafs_1 = [];
  let leafs_2 = [];
  fs(root1, leafs_1);
  fs(root2, leafs_2);
  if (leafs_1.length !== leafs_2.length) return false;
  for (let i = 0; i < leafs_1.length; i++) {
    if (leafs_1[i] !== leafs_2[i]) return false;
  }
  return true;
}

function fs(root: TreeNode, leafs: number[]) {
  if (!root.left && !root.right) leafs.push(root.val);
  if (root.left) fs(root.left, leafs);
  if (root.right) fs(root.right, leafs);
}
