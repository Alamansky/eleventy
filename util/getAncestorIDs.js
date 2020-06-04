export default function getAncestorIDs(node, map = new Map()) {
	if (node) {
		node.id && map.set(node.id, node);
		return getAncestorIDs(node.parentNode, map);
	}
	return map;
}
