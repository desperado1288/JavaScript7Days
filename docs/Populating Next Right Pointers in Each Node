Pointer:
public void connect(TreeLinkNode root) {
    if(root == null)    return;
    TreeLinkNode walk = root;
    while(walk.left != null){
        TreeLinkNode w = walk;
        while(w != null){
            w.left.next = w.right;
            if(w.next != null)  w.right.next = w.next.left;
            w = w.next;
        }
        walk = walk.left;
    }
}

Recursion:
public void connect(TreeLinkNode root){
    if(root == null)    return;
    if(root.left != null){
        root.left.next = root.right;
        if(root.next != null)   root.right.next = root.next.left;
        connect(root.left);
        connect(root.right);
    }
}    
